<?php
//include("con.php");

$query = mysql_query("SELECT * FROM myTbl WHERE myColumn LIKE '%{$_GET['q']}%'") or die(mysql_error());
$total = mysql_num_rows($query);

if($total > 0){ 
    while($reg = mysql_fetch_assoc($query)){
        echo "<li>",
                "<a href='#'>",
                    "<span>Something</span>",
                    "Something",
                "</a>",
             "</li>";
    }
} else {
    echo "Not Found.";
}
?>