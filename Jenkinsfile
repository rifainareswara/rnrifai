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
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git 'https://github.com/rifai-rizqi3/rnrifai.git' 
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             // Login to Docker Hub
        //             sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'

        //             // Push Docker image
        //             sh 'docker push $DOCKER_IMAGE'
        //         }
        //     }
        // }
        stage('SCA Trivy Scan') {
            steps {
                script {
                    echo 'Scanning for vulnerabilities using Trivy...'
                    sh 'trivy fs .'
                }
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
