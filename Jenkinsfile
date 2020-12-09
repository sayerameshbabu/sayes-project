pipeline{
    agent any
    stages{
       stage("ansible-files-transfer"){
            steps{
              // transfering yaml files to ansible server
              sshPublisher(publishers: [sshPublisherDesc(configName: 'ansible-server-ansibleadmin', 
                         transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: './', 
                         remoteDirectorySDF: false, removePrefix: 'ansible-playbooks', sourceFiles: 'ansible-playbooks/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
            }
        }
      stage ("ansible-files-executions"){
        steps{
          //executing playbooks
          sshPublisher(publishers: [sshPublisherDesc(configName: 'ansible-server-ansibleadmin', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 
                   '''ansible-playbook -i hosts.ini installations-playbook.yml -v;
                      ansible-playbook -i hosts.ini building-playbook.yml -v;
                      ansible-playbook -i hosts.ini docker-playbook.yml -v''',
                      execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
          
        }
      }
        
    }
}
