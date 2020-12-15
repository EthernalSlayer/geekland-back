CREATE TABLE articles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TINYTEXT NOT NULL,
    plateforme VARCHAR(20) NOT NULL,
    rate INT NOT NULL,
    good_point VARCHAR(80) NOT NULL,
    bad_point VARCHAR(80) NOT NULL,
    date DATE NOT NULL,
    image VARCHAR(50)
);