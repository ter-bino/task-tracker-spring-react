package ter.bino.tasktracker.model;

import java.time.LocalDate;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="task")
@NoArgsConstructor
@AllArgsConstructor
public class Task {
	
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	private long taskId;
	
	@Column(nullable = false)
	private String title;
	@Column(nullable = false)
	private String description;
	@Column(nullable = false)
	private LocalDate deadline;
	@Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
	private boolean isImportant;
	@Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
	private boolean isCompleted;
}
