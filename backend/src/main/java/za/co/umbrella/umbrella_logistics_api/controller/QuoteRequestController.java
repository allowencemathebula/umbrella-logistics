package za.co.umbrella.umbrella_logistics_api.controller;

import za.co.umbrella.umbrella_logistics_api.entity.QuoteRequest;
import za.co.umbrella.umbrella_logistics_api.repository.QuoteRequestRepository;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin(origins = "*")
public class QuoteRequestController {

    private final QuoteRequestRepository quoteRequestRepository;

    public QuoteRequestController(QuoteRequestRepository quoteRequestRepository) {
        this.quoteRequestRepository = quoteRequestRepository;
    }

    // GET all quote requests (for an internal/admin view)
    @GetMapping
    public List<QuoteRequest> getAllQuoteRequests() {
        return quoteRequestRepository.findAll();
    }

    // GET a single quote request
    @GetMapping("/{id}")
    public QuoteRequest getQuoteRequest(@PathVariable Long id) {
        return quoteRequestRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quote request not found: " + id));
    }

    // CREATE — this is what the website's "Request a Quote" form calls
    @PostMapping
    public ResponseEntity<QuoteRequest> createQuoteRequest(@Valid @RequestBody QuoteRequest quoteRequest) {
        QuoteRequest saved = quoteRequestRepository.save(quoteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuoteRequest(@PathVariable Long id) {
        QuoteRequest quoteRequest = quoteRequestRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quote request not found: " + id));

        quoteRequestRepository.delete(quoteRequest);
        return ResponseEntity.noContent().build();
    }
}
