package za.co.umbrella.umbrella_logistics_api.repository;

import za.co.umbrella.umbrella_logistics_api.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}
