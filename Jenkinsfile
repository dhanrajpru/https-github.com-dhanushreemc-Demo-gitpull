pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }
    
    //checkout stage
    stages {
        stage("checkout"){
            steps {
                checkout scm
            }
        }
        // build image
        stage("build docker image"){
            steps {
                sh "docker build -t redemui ."
            }
        }

        // environment clean up
        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f redemui'
                sh "docker image prune -f"
            }
        }
        
        // Launch service
        stage("Launch service"){
            steps {
                sh "docker run -d -p 4011:4011 --name redemui redemui"
                sh "docker logs redemui"
            }
        }
        
        // Launch URL
        stage("Launch Info"){
            steps {
                echo "http://${ip}:4011"
            }
        }
    }
}
