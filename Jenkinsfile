pipeline {
    agent {
        label 'jenkins-agent'
    }

    environment {
        SONARQUBE_SERVER = 'sonar-scanner-jenkins'
        SONARQUBE_SCANNER = 'sonar-scanner-jenkins'
        SONAR_HOST_URL = 'https://sonar.teamdev.id/'
        SONAR_AUTH_TOKEN = credentials('token-sonarqube')
        DOCKER_HUB_CREDENTIALS = credentials('docker-login-rizqi') 
        DOCKER_IMAGE = 'rnrifai/rnrifai-page:latest' 
        ZAP_DOCKER_IMAGE = 'owasp/zap2docker-stable' // Define the OWASP ZAP Docker image
    }

    stages {
        stage('Clone') {
            steps {
                sh 'git clone https://github.com/rifai-rizqi3/rnrifai.git' 
            }
        }
        stage('[SCA] Trivy Scan') {
            steps {
                script {
                    echo 'Scanning for vulnerabilities using Trivy...'
                    sh 'trivy fs --format=json --output=trivy.json .'
                }
                archiveArtifacts artifacts: 'trivy.json'
            }
        }
        stage('[SAST] SonarQube') {
            steps {
                script {
                    def scannerHome = tool name: env.SONARQUBE_SCANNER, type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv(env.SONARQUBE_SERVER) {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=rnifai-page \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=${SONAR_HOST_URL} \
                            -Dsonar.login=${SONAR_AUTH_TOKEN}"
                    }
                }
            }
        }
    stage('DAST OWASP ZAP') {
        agent {
            docker {
                image 'ghcr.io/zaproxy/zaproxy:weekly'
                args '-u root --network host -v /var/run/docker.sock:/var/run/docker.sock --entrypoint= -v $WORKSPACE:/zap/wrk/:rw'
            }
        }
        steps {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'zap-baseline.py -t http://139.162.18.93:3007 -r /zap/wrk/zapbaseline.html -x /zap/wrk/zapbaseline.xml'
            }
            archiveArtifacts artifacts: 'zapbaseline.html'
            archiveArtifacts artifacts: 'zapbaseline.xml'
        }
    }
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d' 
            }
        }
    }

    post {
        always {
            // Cleanup Docker images
            sh 'docker rmi $DOCKER_IMAGE || true'
        }
        success {
            echo "Post Success"
            discordSend description: "Jenkins Pipeline Build", footer: "Pipeline Success", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discordapp.com/api/webhooks/1245658580485541958/-qTrq_-tzCe6HliVp-U2epamzlh6AN-c2bbzU5FFvJXgNzzz_PxlshYKTtAxI-6gKRVw"
        }
        failure {
            echo "Post Failure"
            discordSend description: "Jenkins Pipeline Build", footer: "Pipeline Failure", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discordapp.com/api/webhooks/1245658580485541958/-qTrq_-tzCe6HliVp-U2epamzlh6AN-c2bbzU5FFvJXgNzzz_PxlshYKTtAxI-6gKRVw"
        }
    }
}
