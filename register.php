<?php 
$name = $_POST['name'];             //posting to server
$email = $_POST['email'];
$password = $_POST['password'];

if (!empty($name) || !empty($email) ||  !empty($password))    //Checking empty fields
{
	$host = "localhost";
	$dbUsername="root";
	$dbPassword="";
	$dbname="webshelf";

	//creating connection
	$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

	if (mysqli_connect_error())
	{
		die('Connection error('. mysqli_connect_errno(). ')'. mysqli_connect_error());
	}
	else
	{
		$SELECT = "SELECT email From register Where email=? Limit 1";
		$INSERT = "INSERT Into register (name, email, password) values(?,?,?)";

		//Prepare statement
		$stmt = $conn->prepare($SELECT);
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$stmt->bind_result($email);
		$stmt->store_result();
		$rnum = $stmt->num_rows;

		if ($rnum==0)
		{
			$stmt->close();

			$stmt = $conn->prepare($INSERT);
			$stmt->bind_param("sss", $name, $email, $password);
			$stmt->execute();
			echo "You have been successfully registered";
		}
		else
		{
			echo "Sorry, this email is already registered :(";
		}
		$stmt->close();
		$conn->close();
		
	}

}
else
{
	echo "All fields are required";    //error display
	die();
}


?>