pipeline {
    agent {
        label 'jenkins-agent'
    }

    environment {
        SONARQUBE_SERVER = 'sonar-scanner-jenkins'
        SONARQUBE_SCANNER = 'sonar-scanner-jenkins'
        SONAR_HOST_URL = 'https://sonar.teamdev.id/'
        SONAR_AUTH_TOKEN = credentials('token-sonarqube')
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                git url: 'https://github.com/rifai-rizqi3/rnrifai.git', branch: 'master'
            }
        }
        
        // stage('[Secret Scanning] Trufflehog') {
        //     steps {
        //         script {
        //             echo 'Scanning for secrets using Trufflehog...'
        //             sh 'pip install truffleHog'
        //             sh 'trufflehog git https://github.com/rifai-rizqi3/vulnerable-app.git --json > trufflehog-report.json'
        //         }
        //         sh 'cat trufflehog-report.json'
        //         archiveArtifacts artifacts: 'trufflehog-report.json'
        //     }
        // }

        // stage('[SCA] Retire Js') {
        //     steps {
        //         script {
        //             docker.image('node:lts-buster-slim').inside {
        //             sh 'npm install -g retire'
        //                 sh 'retire --outputformat json --outputpath retire-scan-report.json'
        //             }
        //         }    
        //         archiveArtifacts artifacts: 'retire-scan-report.json'
        //     }
        // }

        stage('[SCA] Trivy Scan') {
            steps {
                script {
                    echo 'Scanning for vulnerabilities using Trivy...'
                    sh 'trivy image --severity CRITICAL --format template --template "@trivy/contrib/html.tpl" --output report-trivy.html f5f084c8562b'
                }
                archiveArtifacts artifacts: 'trivy.json'
            }
        }
        
        stage('Build Docker') {
            steps {
                script {
                    sh 'docker build -t pipelinetest-vulnerableapp .'
                }
            }
        }

    }

    post {
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
