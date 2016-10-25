# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.42-log)
# Database: sportal-db
# Generation Time: 2016-10-20 18:57:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table AccessToken
# ------------------------------------------------------------

DROP TABLE IF EXISTS `AccessToken`;

CREATE TABLE `AccessToken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table ACL
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ACL`;

CREATE TABLE `ACL` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Event
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Event`;

CREATE TABLE `Event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventType` varchar(512) NOT NULL,
  `name` varchar(512) NOT NULL,
  `sport` varchar(512) NOT NULL,
  `otherSport` varchar(512) DEFAULT NULL,
  `recurring` tinyint(1) DEFAULT NULL,
  `date` datetime NOT NULL,
  `recurringDate` varchar(512) DEFAULT NULL,
  `notes` varchar(512) DEFAULT NULL,
  `age` varchar(512) NOT NULL,
  `fees` tinyint(1) DEFAULT NULL,
  `skillLevel` varchar(512) NOT NULL,
  `image` varchar(512) DEFAULT NULL,
  `addressGeo` point NOT NULL,
  `addressName` varchar(512) NOT NULL,
  `organization` varchar(512) DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `website` varchar(512) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;

INSERT INTO `Event` (`id`, `eventType`, `name`, `sport`, `otherSport`, `recurring`, `date`, `recurringDate`, `notes`, `age`, `fees`, `skillLevel`, `image`, `addressGeo`, `addressName`, `organization`, `email`, `website`, `startDate`)
VALUES
	(2,'League','cool kids','Soccer','',0,'2016-08-17 00:00:00','','bring cleats!','Glory Days (Under 18)',0,'Rookies','https://ssl.gstatic.com/onebox/media/olympics/photos/o16/archive/MTZSPDEC6UKPI5KP_768x432.JPG',X'0000000001010000006267C00FBDC7464070ACD56803AB5EC0','5210 N Kerby Ave, Portland, OR 97217, USA','adams\'s org','a@yahoo.com','www.google.com',NULL),
	(3,'Pickup','Thursday Night Pickup at Duniway','Basketball','',1,'2016-08-11 00:00:00','Thursday','Don\'t come if you suck.','Darn Millennials (18-30)',0,'Bench Warmers','http://www.menshealth.com/sites/menshealth.com/files/2015/03/pick-up-basketball.jpg',X'0000000001010000003727405E59C0464038ECBE63F8AB5EC0','SW Sheridan St, Portland, OR 97239, USA','','jared@potato.com','',NULL),
	(4,'Pickup','ksdjdsk','Basketball','',0,'2016-09-28 00:00:00','','daskdm','All Ages',0,'All Skill Levels','asdm',X'000000000101000000E98F300C58BE46408C1DE8FC6FB35EC0','Beaverton, OR, USA','','sad@sakdj','',NULL),
	(5,'Run or Race','foofs','Triathlon','',0,'2016-09-14 00:00:00','','sdfsd','All Ages',1,'All Skill Levels','zf',X'0000000001010000003B974E907DCB464084C2FB0516A65EC0','7000 NE Airport Way, Portland, OR 97218, USA','klsdfj','s@dms','dsf',NULL),
	(6,'League','John\'s League','Basketball','',0,'2016-09-13 00:00:00','','','All Ages',1,'All Skill Levels','',X'00000000010100000037BBFFD9A0764640207BBDFBE3BA5EC0','State St, Salem, OR, USA','','paul@google.com','',NULL),
	(7,'Pickup','J\'s','Field Hockey','',0,'2016-09-07 00:00:00','','bring some food','All Ages',0,'All Skill Levels','',X'0000000001010000000FAD156D8E7D4640D07FB4A4C8B45EC0','2883 Brush Creek Dr NE, Silverton, OR 97381, USA','','pond@slk.com','',NULL),
	(8,'Run or Race','Bg Ryn','Charity Run','',0,'2016-10-12 00:00:00','','bring your kids','All Ages',1,'All Skill Levels','',X'000000000101000000C56E449CF3774640FC7F8B0409C25EC0','900 State St, Salem, OR 97301, USA','Big organization','jons@dlk.com','www.google.com',NULL),
	(9,'Pickup','Badminton','other','Badminton',0,'2016-10-20 00:00:00','','farm badminton','All Ages',0,'All Skill Levels','',X'000000000101000000C0B8F9EBBA764640808340787EBA5EC0','7157 State St, Salem, OR 97317, USA','','emilie@google.com','',NULL),
	(10,'Pickup','Emilies Pickup','Basketball','',0,'2016-02-17 00:00:00','','bring pizza','All Ages',0,'All Skill Levels','',X'000000000101000000FC87992265794640B867F1BD1ABF5EC0','3740 Market St NE, Salem, OR 97301, USA','','emilie@google.com','',NULL),
	(11,'Pickup','jons','Basketball','',0,'2016-10-19 20:30:00','','lkdASKDJASLKDJlkasjdlaskJDLsakjda\nalskdjlasKJDLkasjdlksajD\nASDKLASJdksjadlkasjldkajsldkjaslkfdsflksdjflkdsjflaksdjflkasdjflakdjsflkajsdlfkjdslfkjdslkafjlsdkfjlakdsjflkadsnf,asdmf.,dsm.af,sdmfaldsfmlaksdfladskfjladskfjlasdkjf','All Ages',0,'All Skill Levels','',X'000000000101000000978EEF41BE784640DCFA9FB250C25EC0','401 Center St NE, Salem, OR 97301, USA','','john@google.com','',NULL),
	(12,'Pickup','Adam\'s','Basketball','',1,'2017-04-23 21:00:00','Fiday','bring shoes','All Ages',0,'All Skill Levels','http://www.stfrancisraleigh.org/websfa/wp-content/uploads/2015/06/basketballCOURTimage.jpg',X'000000000101000000498BE9F81EC64640E81A66683CAB5EC0','N Mississippi Ave, Portland, OR, USA','','adam@gmail.com','','2016-10-14 21:00:00'),
	(13,'Pickup','Pauls\' Pickup','Football','',1,'2017-03-13 21:00:00','Monday','bring cleats','All Ages',0,'All Skill Levels','http://www.houston.k12.mo.us/cms/lib010/MO01909935/Centricity/Domain/49/Images/football1.jpg ',X'000000000101000000B5DD04DF34C74640949DC8DD31AB5EC0','4568 N Albina Ave, Portland, OR 97217, USA','','jon@gmail.com','','2016-10-17 21:00:00'),
	(14,'Pickup','Jakes Game','Field Hockey','',1,'2016-10-11 18:00:00','','Dont forget to bring flwers','All Ages',0,'All Skill Levels','',X'000000000101000000B45549641FC2464060376C5B94AA5EC0','45 SE Belmont St, Portland, OR 97214, USA','','red@gmail.com','','2017-06-24 17:00:00'),
	(15,'Pickup','tims pickup','Basketball','',1,'2017-07-24 18:00:00','','bring people','All Ages',0,'All Skill Levels','',X'000000000101000000BC60CB8690C14640E87F5E5D3AA85EC0','3439 SE Hawthorne Blvd, Portland, OR 97214, USA','','g@gmail.com','','2018-04-06 15:45:00'),
	(16,'Pickup','John\'s','Baseball','',0,'2018-03-04 18:00:00','','google it','All Ages',0,'All Skill Levels','',X'00000000010100000001DE02098AC74640ECD632198EAA5EC0','76 NE Alberta St, Portland, OR 97211, USA','','f@gmail.com','',NULL),
	(17,'League','Jim\'s League','Field Hockey','',0,'2016-10-27 00:00:00','','bring friends!','All Ages',0,'All Skill Levels','',X'000000000101000000BC60CB8690C14640E87F5E5D3AA85EC0','3439 SE Hawthorne Blvd, Portland, OR 97214, USA','Jims','d@gmail.com','www.google.com',NULL),
	(18,'Run or Race','Pete\'s','Mountain Bike Race','',0,'2016-04-05 18:00:00','','Hello','All Ages',1,'All Skill Levels','',X'000000000101000000E27FE14B97C14640B83302E00EAA5EC0','825 SE Hawthorne Blvd, Portland, OR 97214, USA','Petes','g@gmail.com','',NULL);

/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Place
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Place`;

CREATE TABLE `Place` (
  `facilityType` varchar(535) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(535) NOT NULL,
  `image` varchar(535) NOT NULL,
  `addressGeo` point NOT NULL,
  `addressName` varchar(255) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Place` WRITE;
/*!40000 ALTER TABLE `Place` DISABLE KEYS */;

INSERT INTO `Place` (`facilityType`, `id`, `name`, `notes`, `image`, `addressGeo`, `addressName`, `organization`, `website`)
VALUES
	('soccer field, basketball court',1,'petes fields','no restrooms','',X'0000000001010000005D3123BC3D78324048F949B54FF74FC0','petes fields, 12 portland ave','NASA',''),
	('soccer field',2,'hELLO','LKDFJ','',X'000000000101000000282A1BD6548046401083C0CAA1B25EC0','237 Fairview St, Silverton, OR 97381, USA','LDKFJS','GOOGLE.COM'),
	('soccer field',3,'Emilie\'s Park','dont feed the kids','http://www.birdland.co.uk/wp-content/uploads/2014/02/Birdland-Penguin-dancing.jpg',X'000000000101000000B98E71C5C57D46401C03B2D7BBB45EC0','3882 Brush Creek Dr NE, Silverton, OR 97381, USA','emilie needs help non profit','emilies.org'),
	('soccer field',4,'2nd ST Park','Its really nice!','',X'0000000001010000000E63C1B3F3C2464020167B794BAB5EC0','Portland, OR, USA','',''),
	('soccer field',5,'Emilie\'s Place to Play','dont bring joice','',X'000000000101000000B47977BF65C746409082A790ABAA5EC0','4779 N Williams Ave, Portland, OR 97217, USA','adam\'s organization',''),
	('soccer field',6,'Tim\'s','hey there','',X'000000000101000000DA73E3271FC846401C92A4B5B3AA5EC0','5605 N Williams Ave, Portland, OR 97217, USA','briggs',''),
	('soccer field',7,'Pops','dont bring beer','',X'0000000001010000009B087657D1C3464078F464A398AB5EC0','926 NW 10th Ave, Portland, OR 97209, USA','gimps',''),
	('soccer field',8,'Mikes','dont swear','',X'00000000010100000028F8A6E9B3C24640D0CDA38746AB5EC0','340 SW 5th Ave, Portland, OR 97204, USA','',''),
	('soccer field',9,'pibs','','',X'0000000001010000007F86EDDDD5C246403082C64C22AB5EC0','319 SW Pine St, Portland, OR 97204, USA','','');

/*!40000 ALTER TABLE `Place` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table placeUser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `placeUser`;

CREATE TABLE `placeUser` (
  `userId` int(11) NOT NULL,
  `placeId` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `placeUser` WRITE;
/*!40000 ALTER TABLE `placeUser` DISABLE KEYS */;

INSERT INTO `placeUser` (`userId`, `placeId`, `id`)
VALUES
	(7,4,3),
	(7,5,4);

/*!40000 ALTER TABLE `placeUser` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Role`;

CREATE TABLE `Role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table RoleMapping
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RoleMapping`;

CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table User
# ------------------------------------------------------------

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `events` varchar(535) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;

INSERT INTO `User` (`id`, `realm`, `username`, `password`, `email`, `emailVerified`, `verificationToken`, `image`, `events`)
VALUES
	(7,NULL,'Adam Ross Russell','106484197273568717630','arossrussell@gmail.com',NULL,NULL,'https://lh5.googleusercontent.com/-fATprWY94Gw/AAAAAAAAAAI/AAAAAAAAADk/CTGVzDNB6nA/s96-c/photo.jpg','');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table userEvent
# ------------------------------------------------------------

DROP TABLE IF EXISTS `userEvent`;

CREATE TABLE `userEvent` (
  `eventId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `userEvent` WRITE;
/*!40000 ALTER TABLE `userEvent` DISABLE KEYS */;

INSERT INTO `userEvent` (`eventId`, `userId`, `id`)
VALUES
	(13,7,483),
	(12,7,484),
	(9,7,485),
	(3,7,486),
	(14,7,487),
	(15,7,488),
	(16,7,489),
	(17,7,490),
	(18,7,491);

/*!40000 ALTER TABLE `userEvent` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
