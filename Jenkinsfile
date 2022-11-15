pipeline{

    agent {
		  docker {
			image 'cypress/browsers:node16.16.0-chrome106-ff99-edge'
		}
	}

    tools {nodejs "node16"}

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/tests/**/**", description: "enter the spec folder path here")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "select a browser to run")
    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
        }
        stage('Testing'){
            steps{
                sh "npm ci"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo 'Deploy the application'
            }
        }
    }
}