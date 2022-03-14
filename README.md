
node app.js

# API End Points

## System Settings

### DATA CONNECTIONS APIs

- Get All Data Source Records:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source

- Get Source Data Record By Id:
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>

- Add Source Data Record:
    
    **POST** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source

- Update Source Data Record
    
    **PUT** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>

- Delete Source Data Record
    
    **Delete** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>

- Get All Data Source Types Records

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source-type

- Get All Target Data Connection Records
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target

- Get target Data Connection Record By Id
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>

- Add target Data Connection Connection Record

    **POST** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target

- Update target Data Connection Record

    **PUT** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>

- Delete Data Connection Record
    
    **Delete** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>

### CLUSTER SETUP APIs

- Get All Industry Types:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/industry-types

- Get All Columns:
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/columns

- Get Cluster List By Industry Id:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/<:industryId>
    
    E.g.: http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/1

- Add New Cluster:

    **POST** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/

    POST BODY JSON Structure -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/add-new-cluster


### Email Notification APIs

- Get Email Notification Config:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/email-notification-config

- Test Connection:
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/email-notification-config/test-connection

- Update Email Notification Config:

    **PUT** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/email-notification-config


### Unwanted Characters APIs

- Get Unwanted Characters:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/unwanted-characters

- Update Unwanted Characters:

    **PUT** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/unwanted-characters


### Staging Setup APIs

- Get All Data Tables:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/staging-setup/data-tables

- Get All Staging-Mapping:
    
    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/staging-setup

- Update ALL Staging-Mapping:

    **PUT** -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/staging-setup



## Job Configurations

### Job Configuration Instance APIs

- Get All Job Configurations:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/jobs/job-configs

- Delete Job Configurations:

    **DELETE** http://rm-dataflow-api.pentaknot.com/dataflow/jobs/job-configs<:jobId>

`Add & Edit JSON Pending`

### Job Run History APIs

- GET ALL Job Run History:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/jobs/run-history

- Get Job Instance Summary / Job History Details:

    **GET** -> http://rm-dataflow-api.pentaknot.com/dataflow/jobs/run-history<:jobInstanceId>

    Eg.
    - http://rm-dataflow-api.pentaknot.com/dataflow/jobs/run-history/1
    - http://rm-dataflow-api.pentaknot.com/dataflow/jobs/run-history/2
    - http://rm-dataflow-api.pentaknot.com/dataflow/jobs/run-history/3



## Staging Configuration JSONS

### Consolidate Stage JSON
- Activity List JSON
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/consolidate-activity.json)
- Configure - Cleanse Data JSON
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/consolidate-cleanse-data.json)
- Configure - Normalize Date Json
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/consolidate-normalize-date.json)
- Master - Date Format Json
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/date-format-master.json)
- Configure - Moving Staging Data to Conolidate Data JSON
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/consolidate-moving-staging-data-to-consolidate-data.json)
- Mapping - Staging Data to consolidate mapping json
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/staging-data-consolidate-data-mapping.json)
- Configure - Custom Activity
    [Click here to view json](https://raw.githubusercontent.com/rahulg59/rm-dataflow-server/master/res/job-configurations/staging-configuration/consolidate/consolidate-custom-activity.json)
