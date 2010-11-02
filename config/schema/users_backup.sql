# --------------------------------------------------------
# Host:                         127.0.0.1
# Database:                     ez
# Server version:               5.0.67-community-nt
# Server OS:                    Win32
# HeidiSQL version:             5.0.0.3272
# Date/time:                    2010-11-02 22:02:48
# --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
# Dumping database structure for ez
DROP DATABASE IF EXISTS `ez`;
CREATE DATABASE IF NOT EXISTS `ez` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ez`;


# Dumping structure for table ez.acos
DROP TABLE IF EXISTS `acos`;
CREATE TABLE IF NOT EXISTS `acos` (
  `id` int(10) NOT NULL auto_increment,
  `parent_id` int(10) default NULL,
  `model` varchar(255) default NULL,
  `foreign_key` varchar(36) default NULL,
  `alias` varchar(255) default NULL,
  `lft` int(10) default NULL,
  `rght` int(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.acos: 0 rows
DELETE FROM `acos`;
/*!40000 ALTER TABLE `acos` DISABLE KEYS */;
/*!40000 ALTER TABLE `acos` ENABLE KEYS */;


# Dumping structure for table ez.aros
DROP TABLE IF EXISTS `aros`;
CREATE TABLE IF NOT EXISTS `aros` (
  `id` int(10) NOT NULL auto_increment,
  `parent_id` int(10) default NULL,
  `model` varchar(255) default NULL,
  `foreign_key` varchar(36) default NULL,
  `alias` varchar(255) default NULL,
  `lft` int(10) default NULL,
  `rght` int(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

# Dumping data for table ez.aros: 2 rows
DELETE FROM `aros`;
/*!40000 ALTER TABLE `aros` DISABLE KEYS */;
INSERT INTO `aros` (`id`, `parent_id`, `model`, `foreign_key`, `alias`, `lft`, `rght`) VALUES (1, NULL, 'User', '4ccfe48d-5f24-4294-a264-05ec9be3e0a3', NULL, 1, 2), (2, NULL, 'User', '4ccfe5d6-7b80-4396-8fdc-05ec9be3e0a3', NULL, 3, 4);
/*!40000 ALTER TABLE `aros` ENABLE KEYS */;


# Dumping structure for table ez.aros_acos
DROP TABLE IF EXISTS `aros_acos`;
CREATE TABLE IF NOT EXISTS `aros_acos` (
  `id` int(10) NOT NULL auto_increment,
  `aro_id` varchar(36) NOT NULL,
  `aco_id` varchar(36) NOT NULL,
  `_create` varchar(2) NOT NULL default '0',
  `_read` varchar(2) NOT NULL default '0',
  `_update` varchar(2) NOT NULL default '0',
  `_delete` varchar(2) NOT NULL default '0',
  PRIMARY KEY  (`id`),
  UNIQUE KEY `ARO_ACO_KEY` (`aro_id`,`aco_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.aros_acos: 0 rows
DELETE FROM `aros_acos`;
/*!40000 ALTER TABLE `aros_acos` DISABLE KEYS */;
/*!40000 ALTER TABLE `aros_acos` ENABLE KEYS */;


# Dumping structure for table ez.cards
DROP TABLE IF EXISTS `cards`;
CREATE TABLE IF NOT EXISTS `cards` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `user_id` int(11) unsigned default NULL,
  `theme_id` int(11) unsigned default NULL,
  `text_id` int(11) unsigned default NULL,
  `word` varchar(255) default NULL,
  `tr` varchar(255) default NULL,
  `def` varchar(255) default NULL,
  `cont` varchar(255) default NULL,
  `syn` varchar(255) default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=574 DEFAULT CHARSET=utf8;

# Dumping data for table ez.cards: 10 rows
DELETE FROM `cards`;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` (`id`, `user_id`, `theme_id`, `text_id`, `word`, `tr`, `def`, `cont`, `syn`, `created`, `modified`) VALUES (564, 1, NULL, NULL, 'try', NULL, NULL, NULL, NULL, '2010-10-29 19:37:03', '2010-10-29 19:37:03'), (565, 1, NULL, NULL, 'My very test', NULL, NULL, NULL, NULL, '2010-10-29 19:39:47', '2010-10-29 19:39:47'), (566, 1, NULL, NULL, 'more test', NULL, NULL, NULL, NULL, '2010-10-29 19:41:11', '2010-10-29 19:41:11'), (567, 1, NULL, NULL, 'more card', NULL, NULL, NULL, NULL, '2010-10-29 19:54:23', '2010-10-29 19:54:23'), (568, 1, NULL, NULL, 'more card2', NULL, NULL, NULL, NULL, '2010-10-29 19:55:00', '2010-10-29 19:55:00'), (569, 2, NULL, NULL, '\n							Your word...\n							card\n							\n						', '\n							Translation\n							\n							\n						', '\n							[def]\n							def test\n							\n							\n						', NULL, '\n							[syn]\n							syn test\n							\n							\n						', '2010-10-29 20:59:08', '2010-10-29 20:59:08'), (570, 2, NULL, NULL, '\n							Your word...\n							card2\n							\n						', '\n							Translation\n							\n							\n						', '\n							[def]\n							def test\n							\n							\n						', NULL, '\n							[syn]\n							syn test\n							\n							\n						', '2010-10-29 21:00:35', '2010-10-29 21:00:35'), (571, 1, NULL, NULL, 'card3', NULL, NULL, NULL, NULL, '2010-10-29 21:01:15', '2010-10-29 21:01:15'), (572, 2, NULL, NULL, '\n							Your word...\n							card5\n							\n						', '\n							Translation\n							\n							\n						', '\n							[def]\n							def test\n							\n							\n						', NULL, '\n							[syn]\n							syn test\n							\n							\n						', '2010-10-29 21:02:28', '2010-10-29 21:02:28'), (573, 1, NULL, NULL, 'newCard2', NULL, NULL, NULL, NULL, '2010-10-29 21:19:26', '2010-10-29 21:19:26');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;


# Dumping structure for table ez.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` varchar(36) NOT NULL,
  `category_id` varchar(36) default NULL,
  `foreign_key` varchar(36) default NULL,
  `model` varchar(255) NOT NULL,
  `record_count` int(11) default '0',
  `user_id` varchar(36) NOT NULL,
  `lft` int(10) NOT NULL,
  `rght` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `UNIQUE_USER_CATEGORY` (`user_id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.categories: 0 rows
DELETE FROM `categories`;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


# Dumping structure for table ez.categorized
DROP TABLE IF EXISTS `categorized`;
CREATE TABLE IF NOT EXISTS `categorized` (
  `id` varchar(36) NOT NULL,
  `category_id` varchar(36) default NULL,
  `foreign_key` varchar(36) default NULL,
  `model` varchar(255) NOT NULL,
  `record_count` int(11) default '0',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `UNIQUE_CATEGORY_CONTENT` (`category_id`,`foreign_key`,`model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.categorized: 0 rows
DELETE FROM `categorized`;
/*!40000 ALTER TABLE `categorized` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorized` ENABLE KEYS */;


# Dumping structure for table ez.details
DROP TABLE IF EXISTS `details`;
CREATE TABLE IF NOT EXISTS `details` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `position` float NOT NULL default '1',
  `field` varchar(255) NOT NULL,
  `value` text,
  `input` varchar(16) NOT NULL,
  `data_type` varchar(16) NOT NULL,
  `label` varchar(128) NOT NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `UNIQUE_PROFILE_PROPERTY` (`field`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.details: 0 rows
DELETE FROM `details`;
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
/*!40000 ALTER TABLE `details` ENABLE KEYS */;


# Dumping structure for table ez.groups
DROP TABLE IF EXISTS `groups`;
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(64) character set utf8 collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

# Dumping data for table ez.groups: 4 rows
DELETE FROM `groups`;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` (`id`, `name`) VALUES (1, 'admin'), (2, 'guest'), (3, 'user'), (4, 'corp');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;


# Dumping structure for table ez.permission_cache
DROP TABLE IF EXISTS `permission_cache`;
CREATE TABLE IF NOT EXISTS `permission_cache` (
  `id` bigint(20) NOT NULL auto_increment,
  `aro_id` int(11) default NULL,
  `aco_id` int(11) default NULL,
  `model` varchar(255) default NULL,
  `foreign_key` int(11) default NULL,
  `_create` tinyint(1) default NULL,
  `_read` tinyint(1) default NULL,
  `_update` tinyint(1) default NULL,
  `_delete` tinyint(1) default NULL,
  `rule_id` int(11) default NULL,
  `rule_aro_id` int(11) default NULL,
  `rule_aco_id` int(11) default NULL,
  `created` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table ez.permission_cache: 0 rows
DELETE FROM `permission_cache`;
/*!40000 ALTER TABLE `permission_cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `permission_cache` ENABLE KEYS */;


# Dumping structure for table ez.tagged
DROP TABLE IF EXISTS `tagged`;
CREATE TABLE IF NOT EXISTS `tagged` (
  `id` varchar(36) NOT NULL,
  `foreign_key` varchar(36) NOT NULL,
  `tag_id` varchar(36) NOT NULL,
  `model` varchar(255) NOT NULL,
  `language` varchar(6) default NULL,
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `UNIQUE_TAGGING` (`model`,`foreign_key`,`tag_id`,`language`),
  KEY `INDEX_TAGGED` (`model`),
  KEY `INDEX_LANGUAGE` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.tagged: 21 rows
DELETE FROM `tagged`;
/*!40000 ALTER TABLE `tagged` DISABLE KEYS */;
INSERT INTO `tagged` (`id`, `foreign_key`, `tag_id`, `model`, `language`, `created`, `modified`) VALUES ('4ccaeac3-6d80-40c6-b9e1-055c9be3e0a3', '565', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:39:47', '2010-10-29 19:39:47'), ('4ccaeac3-e5ec-42e6-8b3c-055c9be3e0a3', '565', '4ccaeac3-ee78-4f48-9c0c-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:39:47', '2010-10-29 19:39:47'), ('4ccaeb17-5530-431c-bb57-055c9be3e0a3', '566', '4ccaeb17-1578-4319-8ccc-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:41:11', '2010-10-29 19:41:11'), ('4ccaeb17-e174-441c-b432-055c9be3e0a3', '566', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:41:11', '2010-10-29 19:41:11'), ('4ccaee2f-4a54-4f3a-a827-055c9be3e0a3', '567', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:54:23', '2010-10-29 19:54:23'), ('4ccaee55-10b0-4125-a59b-055c9be3e0a3', '568', '4ccaeb17-1578-4319-8ccc-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:55:01', '2010-10-29 19:55:01'), ('4ccaee55-7968-4b6f-b8b0-055c9be3e0a3', '568', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 19:55:01', '2010-10-29 19:55:01'), ('4ccaf15d-26b0-4e39-ad91-055c9be3e0a3', '138', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf15d-7de0-4ab1-bfec-055c9be3e0a3', '138', '4ccaf15d-db00-4b30-84fc-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf15d-d644-4935-8a64-055c9be3e0a3', '138', '4ccaf15d-553c-47f0-bb4c-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf15d-df90-4f9b-b5a3-055c9be3e0a3', '138', '4ccaeb17-1578-4319-8ccc-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf5e3-32a8-450e-8acc-055c9be3e0a3', '139', '4ccaeb17-1578-4319-8ccc-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:27:15', '2010-10-29 20:27:15'), ('4ccaf5e3-a600-48de-892b-055c9be3e0a3', '139', '4ccaf5e3-b600-4c34-b0a5-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:27:15', '2010-10-29 20:27:15'), ('4ccaf5e3-da44-434e-9d18-055c9be3e0a3', '139', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 20:27:15', '2010-10-29 20:27:15'), ('4ccafddb-0714-49de-a88e-055c9be3e0a3', '571', '4ccafddb-35a8-4a85-ab8f-055c9be3e0a3', 'Card', 'ru', '2010-10-29 21:01:15', '2010-10-29 21:01:15'), ('4ccafddb-81c4-4853-90ec-055c9be3e0a3', '571', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 21:01:15', '2010-10-29 21:01:15'), ('4ccafe24-4920-4976-a89d-055c9be3e0a3', '572', '4ccafe24-0af8-4f39-9fee-055c9be3e0a3', 'Card', 'ru', '2010-10-29 21:02:28', '2010-10-29 21:02:28'), ('4ccafe24-916c-4ded-8c24-055c9be3e0a3', '572', '4ccafe24-c708-4ae8-8b36-055c9be3e0a3', 'Card', 'ru', '2010-10-29 21:02:28', '2010-10-29 21:02:28'), ('4ccb01f7-1860-437d-863f-055c9be3e0a3', '140', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 21:18:47', '2010-10-29 21:18:47'), ('4ccb021e-cee4-49d4-91fe-055c9be3e0a3', '573', '4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', 'Card', 'ru', '2010-10-29 21:19:26', '2010-10-29 21:19:26'), ('4ccb089d-a224-4651-9995-055c9be3e0a3', '141', '4ccb089d-aeb4-4a9e-80d4-055c9be3e0a3', 'Theme', 'ru', '2010-10-29 21:47:09', '2010-10-29 21:47:09');
/*!40000 ALTER TABLE `tagged` ENABLE KEYS */;


# Dumping structure for table ez.tags
DROP TABLE IF EXISTS `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
  `id` varchar(36) NOT NULL,
  `identifier` varchar(30) default NULL,
  `name` varchar(30) NOT NULL,
  `keyname` varchar(30) NOT NULL,
  `weight` int(2) NOT NULL default '0',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `UNIQUE_TAG` (`identifier`,`keyname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.tags: 10 rows
DELETE FROM `tags`;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` (`id`, `identifier`, `name`, `keyname`, `weight`, `created`, `modified`) VALUES ('4ccaeac3-a2b8-4a63-91ba-055c9be3e0a3', NULL, 'very', 'very', 0, '2010-10-29 19:39:47', '2010-10-29 19:39:47'), ('4ccaeac3-ee78-4f48-9c0c-055c9be3e0a3', NULL, 'test', 'test', 0, '2010-10-29 19:39:47', '2010-10-29 19:39:47'), ('4ccaeb17-1578-4319-8ccc-055c9be3e0a3', NULL, 'new1', 'new1', 0, '2010-10-29 19:41:11', '2010-10-29 19:41:11'), ('4ccaf15d-553c-47f0-bb4c-055c9be3e0a3', NULL, 'new3', 'new3', 0, '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf15d-db00-4b30-84fc-055c9be3e0a3', NULL, 'new2', 'new2', 0, '2010-10-29 20:07:57', '2010-10-29 20:07:57'), ('4ccaf5e3-b600-4c34-b0a5-055c9be3e0a3', NULL, 'old', 'old', 0, '2010-10-29 20:27:15', '2010-10-29 20:27:15'), ('4ccafddb-35a8-4a85-ab8f-055c9be3e0a3', NULL, 'new4', 'new4', 0, '2010-10-29 21:01:15', '2010-10-29 21:01:15'), ('4ccafe24-0af8-4f39-9fee-055c9be3e0a3', NULL, 'two', 'two', 0, '2010-10-29 21:02:28', '2010-10-29 21:02:28'), ('4ccafe24-c708-4ae8-8b36-055c9be3e0a3', NULL, 'one', 'one', 0, '2010-10-29 21:02:28', '2010-10-29 21:02:28'), ('4ccb089d-aeb4-4a9e-80d4-055c9be3e0a3', 'test', 'tag', 'tag', 0, '2010-10-29 21:47:09', '2010-10-29 21:47:09');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;


# Dumping structure for table ez.texts
DROP TABLE IF EXISTS `texts`;
CREATE TABLE IF NOT EXISTS `texts` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `user_id` int(11) unsigned NOT NULL,
  `theme_id` int(11) unsigned NOT NULL,
  `body` text NOT NULL,
  `modified` datetime default NULL,
  `created` datetime default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

# Dumping data for table ez.texts: 1 rows
DELETE FROM `texts`;
/*!40000 ALTER TABLE `texts` DISABLE KEYS */;
INSERT INTO `texts` (`id`, `user_id`, `theme_id`, `body`, `modified`, `created`) VALUES (1, 2, 0, '', '2010-04-26 21:38:29', '2010-04-26 21:38:28');
/*!40000 ALTER TABLE `texts` ENABLE KEYS */;


# Dumping structure for table ez.themes
DROP TABLE IF EXISTS `themes`;
CREATE TABLE IF NOT EXISTS `themes` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `user_id` int(11) unsigned NOT NULL default '0',
  `theme` varchar(250) NOT NULL,
  `card_count` int(11) unsigned NOT NULL default '0',
  `current_theme` int(11) unsigned default '0',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8;

# Dumping data for table ez.themes: 7 rows
DELETE FROM `themes`;
/*!40000 ALTER TABLE `themes` DISABLE KEYS */;
INSERT INTO `themes` (`id`, `user_id`, `theme`, `card_count`, `current_theme`, `created`, `modified`) VALUES (135, 114, 'Theme 1', 1, 1288342074, '2010-10-29 12:47:54', '2010-10-29 12:47:54'), (136, 1, 'new', 0, 0, '2010-10-29 20:04:27', '2010-10-29 20:04:27'), (137, 1, 'My new theme2', 0, 0, '2010-10-29 20:05:12', '2010-10-29 20:05:35'), (138, 1, 'my theme3', 0, 0, '2010-10-29 20:07:57', '2010-10-29 20:07:57'), (139, 1, 'tema1', 0, 0, '2010-10-29 20:27:15', '2010-10-29 20:27:15'), (140, 1, 'just a try', 0, 0, '2010-10-29 21:18:47', '2010-10-29 21:18:47'), (141, 1, 'tema2', 0, 0, '2010-10-29 21:47:09', '2010-10-29 21:47:09');
/*!40000 ALTER TABLE `themes` ENABLE KEYS */;


# Dumping structure for table ez.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `group_id` int(11) default '0',
  `username` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL default '1',
  `passwd` varchar(128) default NULL,
  `password_token` varchar(128) default NULL,
  `email` varchar(255) default NULL,
  `email_authenticated` tinyint(1) default '0',
  `email_token` varchar(255) default NULL,
  `email_token_expires` datetime default NULL,
  `tos` tinyint(1) default '0',
  `active` tinyint(1) default '0',
  `last_login` datetime default NULL,
  `last_activity` datetime default NULL,
  `is_admin` tinyint(1) default '0',
  `role` varchar(255) default NULL,
  `card_count` int(11) default '0',
  `theme_count` int(11) default '0',
  `text_count` int(11) default '0',
  `created` datetime default NULL,
  `modified` datetime default NULL,
  PRIMARY KEY  (`id`),
  KEY `BY_USERNAME` (`username`,`passwd`),
  KEY `BY_EMAIL` (`email`,`passwd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dumping data for table ez.users: 4 rows
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `group_id`, `username`, `slug`, `passwd`, `password_token`, `email`, `email_authenticated`, `email_token`, `email_token_expires`, `tos`, `active`, `last_login`, `last_activity`, `is_admin`, `role`, `card_count`, `theme_count`, `text_count`, `created`, `modified`) VALUES ('4ccfe48d-5f24-4294-a264-05ec9be3e0a3', 0, 'test', '1', 'c129b324aee662b04eccf68babba85851346dff9', NULL, 'test1@test.ru', 0, NULL, NULL, 0, 0, NULL, NULL, 0, NULL, 0, 0, 0, '2010-11-02 13:14:37', '2010-11-02 13:14:37'), ('4ccfe5d6-7b80-4396-8fdc-05ec9be3e0a3', 0, 'test2', '1', 'c129b324aee662b04eccf68babba85851346dff9', NULL, 'test2@test.ru', 0, NULL, NULL, 0, 0, NULL, NULL, 0, NULL, 0, 0, 0, '2010-11-02 13:20:06', '2010-11-02 13:20:06'), ('4cd00370-6b28-41b6-a8be-05ec9be3e0a3', 0, 'test4', 'test4', 'c129b324aee662b04eccf68babba85851346dff9', NULL, 'test4@test.ru', 1, 'gt9d7w4mek', '2010-11-03 15:26:24', 1, 1, '2010-11-02 21:52:15', NULL, 0, NULL, 0, 0, 0, '2010-11-02 15:26:24', '2010-11-02 21:52:15'), ('4cd00a81-b2e4-4360-974b-05ec9be3e0a3', 0, 'test5', 'test5', 'c129b324aee662b04eccf68babba85851346dff9', NULL, 'test5@test.ru', 1, 'z6q310utnb', '2010-11-03 15:56:33', 1, 1, '2010-11-02 21:48:19', NULL, 0, NULL, 0, 0, 0, '2010-11-02 15:56:33', '2010-11-02 21:48:19'), ('4cd05b19-500c-41e5-9698-05ec9be3e0a3', 0, 'test7', 'test7', 'c129b324aee662b04eccf68babba85851346dff9', NULL, 'test7@test.ru', 0, 'yeu63xzlgk', '2010-11-03 21:40:25', 1, 1, NULL, NULL, 0, NULL, 0, 0, 0, '2010-11-02 21:40:25', '2010-11-02 21:40:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
