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
