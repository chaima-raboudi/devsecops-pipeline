pipeline {
    agent any

    environment {
	Git_REPO = 'https://github.com/chaima-raboudi/devsecops-pipeline.git'	
    
    }

    stages {
	stage('Cloner le code') {
	    steps {
		git url: "${env.GIT_REPO}"
	    }
	}
    }
}
