pipeline{
    agent any
    stages{
        stage("clone"){
            steps{
              // transfering yaml files to ansible server
              sshPublisher(publishers: [sshPublisherDesc(configName: 'ansible-server-ansibleadmin', 
                         transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: './', 
                         remoteDirectorySDF: false, removePrefix: 'ansible-playbooks', sourceFiles: 'ansible-playbooks/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
              //transfering Dockerfile to docker server
            }
        }
    }
}
