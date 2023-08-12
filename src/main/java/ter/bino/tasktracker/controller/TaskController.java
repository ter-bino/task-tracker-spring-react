package ter.bino.tasktracker.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ter.bino.tasktracker.model.Task;
import ter.bino.tasktracker.repository.TaskRepository;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/")
	public Iterable<Task> getAllTasks() {
		return taskRepository.findAllByOrderByDeadlineAsc();
	}
	
	@PostMapping("/add")
	public Task addNewTask(@RequestBody Task newTask) {
		var task = new Task();
		
		task.setTitle(newTask.getTitle());
		task.setDescription(newTask.getDescription());
		task.setDeadline(newTask.getDeadline());
		task.setImportant(newTask.isImportant());
		task.setCompleted(false);
		
		taskRepository.save(task);
		return task;
	}
	
	@GetMapping("/{id}")
	public Optional<Task> getTask(@PathVariable Long id) {
		return taskRepository.findById(id);
	}
	
	@PutMapping("/edit/{id}")
	public String update(@RequestBody Task updatedTask, @PathVariable Long id) {
		var task =  taskRepository.findById(id);

		if(task.isPresent()) {
			var existingTask = task.get();
			existingTask.setTitle(updatedTask.getTitle());
			existingTask.setDescription(updatedTask.getDescription());
			existingTask.setDeadline(updatedTask.getDeadline());
			existingTask.setImportant(updatedTask.isImportant());
			existingTask.setCompleted(updatedTask.isCompleted());
			taskRepository.save(existingTask);
			return "Task updated successfully.";
		} else {
			return "Can't modify a non existing task.";
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteTask(@PathVariable Long id) {
		if(taskRepository.findById(id).isPresent()) {
			taskRepository.deleteById(id);
			return "Task deleted successfully.";
		} else {
			return "Can't delete a non existing task.";
		}
	}
	
}
