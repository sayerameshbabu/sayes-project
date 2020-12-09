pipeline{
    agent any
    stages{
        stage("clone"){
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'ansible-server-ansibleadmin',
                                                            transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand:
                                                                                    '''ansible-playbook -i hosts.ini installations-playbook.yml;
                                                                                       ansible-playbook -i hosts.ini building-playbook.yml;
                                                                                       ansible-playbook -i hosts.ini docker-playbook.yml''',
              execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: './', remoteDirectorySDF: false, removePrefix: 'ansible-playbooks', sourceFiles: 'ansible-playbooks/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
            }
        }
    }
}
