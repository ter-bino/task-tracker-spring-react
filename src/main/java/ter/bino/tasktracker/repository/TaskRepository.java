package ter.bino.tasktracker.repository;

import org.springframework.data.repository.CrudRepository;

import ter.bino.tasktracker.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{

}
