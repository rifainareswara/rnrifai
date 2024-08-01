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
        ZAP_DOCKER_IMAGE = 'ghcr.io/zaproxy/zaproxy:stable'
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
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d' 
            }
        }
        // stage('[DAST] OWASP ZAP') {
        //     steps {
        //         catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //             script {
        //                 echo 'Running OWASP ZAP scan...'
        //                 sh 'docker pull ghcr.io/zaproxy/zaproxy:stable'
        //                 sh '''
        //                     docker run --rm -t \
        //                         -v ${WORKSPACE}/zap-reports:/zap/wrk \
        //                         ghcr.io/zaproxy/zaproxy:stable \
        //                         zap-full-scan.py -t http://139.162.18.93:3007 -r /zap/wrk/zap-report.html
        //                 '''
        //             }
        //             sh 'cp /zap/wrk/zap-report.html ./zap-report.html'
        //             archiveArtifacts artifacts: 'zap-report.html'
        //         }
        //     }
        // }
        // stage('[DAST] OWASP ZAP') {
        //     steps {
        //         catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //             script {
        //                 echo 'Running OWASP ZAP scan...'
        //                 sh 'docker pull ghcr.io/zaproxy/zaproxy:stable'
        //                 sh '''
        //                     docker run --rm -t \
        //                         -v ${WORKSPACE}/zap-reports:/zap/wrk \
        //                         ghcr.io/zaproxy/zaproxy:stable \
        //                         zap-full-scan.py -t http://139.162.18.93:3007 -r /zap/wrk/zap-report.html
        //                 '''
        //             }
        //             sh 'cp ${WORKSPACE}/zap-reports/zap-report.html ./zap-report.html'
        //             archiveArtifacts artifacts: 'zap-report.html'
        //         }
        //     }
        // }

        stage('[DAST] OWASP ZAP') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    script {
                        echo 'Running OWASP ZAP scan...'
                        sh 'docker --version'  // Check Docker version to ensure Docker is running
                        sh 'mkdir -p ${WORKSPACE}/zap-reports'  // Ensure the directory exists
                        sh 'docker pull ghcr.io/zaproxy/zaproxy:stable'
                        sh '''
                            docker run --user $(id -u) --rm -t \
                                -v ${WORKSPACE}/zap-reports:/zap/wrk \
                                ghcr.io/zaproxy/zaproxy:stable \
                                zap-full-scan.py -t http://139.162.18.93:3007 -r /zap/wrk/zap-report.html
                        '''
                        // Check if the report was generated
                        sh 'test -f ${WORKSPACE}/zap-reports/zap-report.html'
                    }
                    sh 'cp ${WORKSPACE}/zap-reports/zap-report.html ./zap-report.html'
                    archiveArtifacts artifacts: 'zap-report.html'
                }
            }
        }


        // stage('[DAST] OWASP ZAP') {
        //     steps {
        //         script {
        //             try {
        //                 echo 'Running OWASP ZAP scan...'
        //                 sh 'docker pull ghcr.io/zaproxy/zaproxy:stable'
        //                 sh '''
        //                     docker run --rm -t \
        //                         -v ${WORKSPACE}/zap-reports:/zap/wrk \
        //                         ghcr.io/zaproxy/zaproxy:stable \
        //                         zap-full-scan.py -t http://139.162.18.93:3007 -r /zap/wrk/zap-report.html
        //                 '''
        //                 sh 'cp /zap/wrk/zap-report.html ./zap-report.html'
        //             } catch (Exception e) {
        //                 echo 'OWASP ZAP scan failed.'
        //                 currentBuild.result = 'FAILURE'
        //             } finally {
        //                 // Archive the artifacts regardless of the result
        //                 archiveArtifacts artifacts: 'zap-report.html'
        //             }
        //         }
        //     }
        // }


        // stage('[DAST] OWASP ZAP') {
        //     steps {
        //         script {
        //             try {
        //                 echo 'Running OWASP ZAP scan...'
        //                 sh 'docker pull ghcr.io/zaproxy/zaproxy:stable'
                
        //                 // Run the scan and capture the output and error
        //                 def scanResult = sh(script: '''
        //                     docker run --rm -t \
        //                         -v ${WORKSPACE}/zap-reports:/zap/wrk \
        //                         ghcr.io/zaproxy/zaproxy:stable \
        //                         zap-full-scan.py -t http://139.162.18.93:3007 -r /zap/wrk/zap-report.html
        //                 ''', returnStatus: true, returnStdout: true, returnStderr: true)
                
        //                 echo "ZAP scan output: ${scanResult.stdout}"
        //                 echo "ZAP scan errors: ${scanResult.stderr}"
                
        //                 // Check for non-zero exit codes
        //                 if (scanResult.exitCode != 0) {
        //                     echo "OWASP ZAP scan returned exit code: ${scanResult.exitCode}"
        //                     error "OWASP ZAP scan failed with exit code: ${scanResult.exitCode}"
        //                 }
                
        //             } catch (Exception e) {
        //                 echo "An error occurred: ${e.getMessage()}"
        //                 currentBuild.result = 'FAILURE'
        //                 throw e
        //             } finally {
        //                 // Archive the report regardless of success or failure
        //                 archiveArtifacts artifacts: 'zap-reports/zap-report.html'
        //             }
        //         }
        //     }
        // }

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
