pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }

    stages {
        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("build docker image"){
            steps {
                sh "docker build -t redemui ."
            }
        }


        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f redemui'
                sh "docker image prune -f"
            }
        }

        stage("Launch service"){
            steps {
                sh "docker run -d -p 4045:4045 --name redemui redemui"
                sh "docker logs redemui"
            }
        }

        stage("Launch Info"){
            steps {
                echo "http://${ip}:4045"
            }
        }
    }
}
