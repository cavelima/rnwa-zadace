<?php
    class Employee {
        function __construct($connection) {
            $this->connection = $connection;
        }

        public function where($string) {
            $query  = "SELECT * FROM employees ";
            $query .= "WHERE birth_date LIKE '%$string%' ";
            $query .= "OR first_name LIKE '%$string%' ";
            $query .= "OR last_name LIKE '%$string%' ";
            $query .= "OR gender LIKE '%$string%' ";
            $query .= "OR hire_date LIKE '%$string%' ";

            return  $this->list(mysqli_query($this->connection, $query));
        }

        private function list($companies) {
            $companyList = [];

            while($row = mysqli_fetch_assoc($companies)) {
                $companyList[] = $row;
            }

            return json_encode($companyList);
        }
    }