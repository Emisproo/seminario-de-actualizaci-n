-- Adminer 4.8.1 MySQL 8.0.29 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `access-control-component`;
CREATE DATABASE `access-control-component` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `access-control-component`;

DELIMITER ;;

CREATE PROCEDURE `addActionToGroup`(IN `id_group` int, IN `id_target_action` int)
INSERT INTO group_accesses(id_group, id_action) VALUES (id_group, id_target_action);;

CREATE PROCEDURE `addUserToGroup`(IN `id_user` int, IN `id_target_group` int)
INSERT INTO group_members(id_user, id_group) VALUES (id_user, id_target_group);;

CREATE PROCEDURE `createGroup`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `description` varchar(200) CHARACTER SET 'utf8')
BEGIN
    DECLARE id_group INT DEFAULT 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
       BEGIN
           ROLLBACK;
           RESIGNAL;
       END;
    START TRANSACTION;
         INSERT INTO `groups` (`name`, `description`)  VALUES(name, description);
    COMMIT;
    ROLLBACK;
END;;

CREATE PROCEDURE `createUser`(IN `name` varchar(45), IN `password` varchar(45))
BEGIN
    DECLARE id_user INT DEFAULT 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
       BEGIN
           ROLLBACK;
            RESIGNAL;
       END;
    START TRANSACTION;
         INSERT INTO user(name, password) VALUES (name, password);

         SET id_user = LAST_INSERT_ID();

         CALL `addUserToGroup`(id_user, 9);
    COMMIT;
END;;

CREATE PROCEDURE `delete_group`(IN `name` varchar(45) CHARACTER SET 'utf8')
DELETE FROM `groups` WHERE name = 'Estudiante';;

CREATE PROCEDURE `delete_user`(IN `name` varchar(45) CHARACTER SET 'utf8')
DELETE FROM user WHERE name = 'Alejandra';;

CREATE PROCEDURE `select_group`(IN `name` varchar(50) CHARACTER SET 'utf8')
SELECT * FROM `groups`;;

CREATE PROCEDURE `select_user`(IN `name` varchar(50) CHARACTER SET 'utf8')
SELECT name FROM user;;

CREATE PROCEDURE `update_group`(IN `id` int, IN `new_name` varchar(45) CHARACTER SET 'utf8', IN `new_description` varchar(200) CHARACTER SET 'utf8')
UPDATE `groups`
SET description = new_description, name = new_name
WHERE id = id;;

CREATE PROCEDURE `update_user`(IN `new_name` varchar(45) CHARACTER SET 'utf8', IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
UPDATE user
SET password = password, name= new_name
WHERE name = name;;

CREATE PROCEDURE `validate_user`(IN `_name` varchar(45), IN `_password` varchar(45))
SELECT id_user FROM user 
Where user.name=_name AND user.password=_password;;

DELIMITER ;

DROP TABLE IF EXISTS `action`;
CREATE TABLE `action` (
  `Id_action` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_accesses`;
CREATE TABLE `group_accesses` (
  `Id_group_accesses` int NOT NULL AUTO_INCREMENT,
  `id_group` int unsigned NOT NULL,
  `id_action` int unsigned NOT NULL,
  PRIMARY KEY (`Id_group_accesses`),
  KEY `id_group` (`id_group`),
  KEY `id_action` (`id_action`),
  CONSTRAINT `group_accesses_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`Id_action`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_3` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_4` FOREIGN KEY (`id_action`) REFERENCES `action` (`Id_action`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_members`;
CREATE TABLE `group_members` (
  `Id_group_members` int unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int unsigned NOT NULL,
  `id_group` int unsigned NOT NULL,
  PRIMARY KEY (`Id_group_members`),
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`Id_user`) ON DELETE CASCADE,
  CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id_group`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

INSERT INTO `group_members` (`Id_group_members`, `id_user`, `id_group`) VALUES
(9,	13,	7),
(11,	18,	9);

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id_group` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

INSERT INTO `groups` (`id_group`, `name`, `description`) VALUES
(7,	'Student',	'study'),
(8,	'Student',	'study'),
(9,	'Student',	'study');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

INSERT INTO `user` (`id_user`, `name`, `password`) VALUES
(13,	'Pedro',	'456123'),
(16,	'Juan',	'1234'),
(18,	'Thiago',	'123456');

-- 2022-09-14 21:24:53
