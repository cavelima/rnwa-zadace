<?php
include 'database/databaseConfig.php';
include 'database/databaseConnection.php';
include 'model/company.php';

$config = include 'database/dbConfig.php';

if(isset($_POST["search"])) {
    $databaseConnection = new DatabaseConnection(new DatabaseConfig($config));
    $connection = $databaseConnection->connection();
    $company = new Company($connection);
    $companies = $company->where($_POST["search"]);

    echo $companies;
}

?>