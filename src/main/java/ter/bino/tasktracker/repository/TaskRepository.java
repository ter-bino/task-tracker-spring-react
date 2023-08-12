package ter.bino.tasktracker.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import ter.bino.tasktracker.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long>, PagingAndSortingRepository<Task, Long>{
	Iterable<Task> findAll();
	Iterable<Task> findAllByOrderByDeadlineAsc();
	Page<Task> findAll(Pageable page);
}
