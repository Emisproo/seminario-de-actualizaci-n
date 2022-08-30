-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DELIMITER ;;

DROP PROCEDURE IF EXISTS `addActionToGroup`;;
CREATE PROCEDURE `addActionToGroup`(IN `id_group` int, IN `id_target_action` int)
INSERT INTO group_accesses(id_group, id_action) VALUES (id_group, id_target_action);;

DROP PROCEDURE IF EXISTS `addUserToGroup`;;
CREATE PROCEDURE `addUserToGroup`(IN `id_user` int, IN `id_target_group` int)
INSERT INTO group_members(id_user, id_group) VALUES (id_user, id_target_group);;

DROP PROCEDURE IF EXISTS `createGroup`;;
CREATE PROCEDURE `createGroup`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `description` varchar(200) CHARACTER SET 'utf8')
BEGIN
    DECLARE id_group INT DEFAULT 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
       BEGIN
           ROLLBACK;
           RESIGNAL;
       END;
    START TRANSACTION;
         INSERT INTO groups (`name`, `description`)  VALUES(name, description);
    COMMIT;
    ROLLBACK;
END;;

DROP PROCEDURE IF EXISTS `createUser`;;
CREATE PROCEDURE `createUser`(IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
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

         CALL addUserToGroup(id_user, 3);
    COMMIT;
END;;

DROP PROCEDURE IF EXISTS `delete_group`;;
CREATE PROCEDURE `delete_group`(IN `name` varchar(45) CHARACTER SET 'utf8')
DELETE FROM `group` WHERE name = 'Estudiante';; 

DROP PROCEDURE IF EXISTS `delete_user`;;
CREATE PROCEDURE `delete_user`(IN `name` varchar(45) CHARACTER SET 'utf8')
DELETE FROM user WHERE name = 'Alejandra';;

DROP PROCEDURE IF EXISTS `select_group`;;
CREATE PROCEDURE `select_group`(IN `name` varchar(50) CHARACTER SET 'utf8')
SELECT * FROM groups;;

DROP PROCEDURE IF EXISTS `select_user`;;
CREATE PROCEDURE `select_user`(IN `name` varchar(50) CHARACTER SET 'utf8')
SELECT name FROM user;;

DROP PROCEDURE IF EXISTS `update_group`;;
CREATE PROCEDURE `update_group`(IN `id` int, IN `new_name` varchar(45) CHARACTER SET 'utf8', IN `new_description` varchar(200) CHARACTER SET 'utf8')
UPDATE groups
SET description = new_description, name = new_name
WHERE id = id;;

DROP PROCEDURE IF EXISTS `update_user`;;
CREATE PROCEDURE `update_user`(IN `new_name` varchar(45) CHARACTER SET 'utf8', IN `name` varchar(45) CHARACTER SET 'utf8', IN `password` varchar(45) CHARACTER SET 'utf8')
UPDATE user
SET password = password, name= new_name
WHERE name = name;;

DELIMITER ;

DROP TABLE IF EXISTS `action`;
CREATE TABLE `action` (
  `Id_action` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id_action`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id_group` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_accesses`;
CREATE TABLE `group_accesses` (
  `Id_group_accesses` int(11) NOT NULL AUTO_INCREMENT,
  `id_group` int(10) unsigned NOT NULL,
  `id_action` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Id_group_accesses`),
  KEY `id_group` (`id_group`),
  KEY `id_action` (`id_action`),
  CONSTRAINT `group_accesses_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`Id_group`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`Id_action`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_3` FOREIGN KEY (`id_group`) REFERENCES `groups` (`Id_group`) ON DELETE CASCADE,
  CONSTRAINT `group_accesses_ibfk_4` FOREIGN KEY (`id_action`) REFERENCES `action` (`Id_action`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_members`;
CREATE TABLE `group_members` (
  `Id_group_members` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned NOT NULL,
  `id_group` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Id_group_members`),
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`Id_user`) ON DELETE CASCADE,
  CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `groups` (`Id_group`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_user` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- 2022-08-30 19:31:58
