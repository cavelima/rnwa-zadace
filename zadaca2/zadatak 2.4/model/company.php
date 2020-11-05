<?php
    class Company {
        function __construct($connection) {
            $this->connection = $connection;
        }

        public function where($string) {
            $query  = "SELECT * FROM companies ";
            $query .= "WHERE company LIKE '%$string%' ";
            $query .= "OR contact LIKE '%$string%' ";
            $query .= "OR country LIKE '%$string%' ";

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