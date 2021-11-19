DELIMITER $$
  CREATE TRIGGER insert_date 
    BEFORE INSERT ON movies
    FOR EACH ROW BEGIN
    SET NEW.release_year = YEAR(NOW());
  END $$
  
  CREATE TRIGGER to_log
    AFTER INSERT ON movies
    FOR EACH ROW BEGIN
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, "INSERT", NOW());
  END $$
DELIMITER $$