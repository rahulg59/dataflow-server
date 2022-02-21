
node app.js

API End Points

DATA CONNECTIONS APIs

Get All Data Source Records
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source
Get Data Source Record By Id
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>
Add Data Source Record
POST -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source
Update Data Source Record
PUT -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>
Delete Data Source Record
Delete -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source/<:connectionId>

Get All Data Source Types Records
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/source-type

Get All Target Data Records
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target
Get Data target Record By Id
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>
Add Data target Record
POST -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target
Update Data target Record
PUT -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>
Delete Data target Record
Delete -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/data/target/<:connectionId>

CLUSTER SETUP APIs

Get All Industry Types
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/industry-types
// Get All Columns
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/columns
// Get Cluster List By Industry Id
GET -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/<:industryId>
// Add New Cluster
POST -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/
POST BODY JSON Structure -> http://rm-dataflow-api.pentaknot.com/dataflow/system-settings/cluster/add-new-cluster
