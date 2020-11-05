<?php
include 'database/databaseConfig.php';
include 'database/databaseConnection.php';
include 'model/employee.php';

$config = include 'database/dbConfig.php';

if(isset($_POST["search"])) {
    $databaseConnection = new DatabaseConnection(new DatabaseConfig($config));
    $connection = $databaseConnection->connection();
    $employee = new Employee($connection);
    $employees = $employee->where($_POST["search"]);

    echo $employees;
}
?>