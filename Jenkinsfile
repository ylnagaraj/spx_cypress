Jenkinsfile
pipeline{
    agent any
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
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo 'Deploy the application'
            }
        }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}