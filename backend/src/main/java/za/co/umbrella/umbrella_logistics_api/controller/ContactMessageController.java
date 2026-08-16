package za.co.umbrella.umbrella_logistics_api.controller;

import za.co.umbrella.umbrella_logistics_api.entity.ContactMessage;
import za.co.umbrella.umbrella_logistics_api.repository.ContactMessageRepository;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactMessageController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    // GET all messages (for an internal/admin view)
    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }

    // CREATE — for a simple "contact us" form, separate from the quote form
    @PostMapping
    public ResponseEntity<ContactMessage> createMessage(@Valid @RequestBody ContactMessage contactMessage) {
        ContactMessage saved = contactMessageRepository.save(contactMessage);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        ContactMessage contactMessage = contactMessageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Message not found: " + id));

        contactMessageRepository.delete(contactMessage);
        return ResponseEntity.noContent().build();
    }
}
