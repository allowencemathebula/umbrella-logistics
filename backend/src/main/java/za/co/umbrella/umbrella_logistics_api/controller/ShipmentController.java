package za.co.umbrella.umbrella_logistics_api.controller;

import za.co.umbrella.umbrella_logistics_api.entity.Shipment;
import za.co.umbrella.umbrella_logistics_api.repository.ShipmentRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shipments")
@CrossOrigin(origins = "*")
public class ShipmentController {

    private final ShipmentRepository shipmentRepository;

    public ShipmentController(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    // GET all shipments
    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    // GET shipment by reference
    @GetMapping("/{reference}")
    public Shipment getShipmentByReference(@PathVariable String reference) {
        return shipmentRepository.findByReference(reference)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Shipment not found: " + reference));
    }

    // CREATE shipment
    @PostMapping
    public Shipment createShipment(@RequestBody Shipment shipment) {
        return shipmentRepository.save(shipment);
    }

    // UPDATE shipment
    @PutMapping("/{reference}")
    public Shipment updateShipment(
            @PathVariable String reference,
            @RequestBody Shipment shipmentDetails) {

        Shipment shipment = shipmentRepository.findByReference(reference)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Shipment not found: " + reference));

        shipment.setOrigin(shipmentDetails.getOrigin());
        shipment.setDestination(shipmentDetails.getDestination());
        shipment.setCargo(shipmentDetails.getCargo());
        shipment.setStatus(shipmentDetails.getStatus());
        shipment.setStatusDescription(
                shipmentDetails.getStatusDescription()
        );
        shipment.setProgress(shipmentDetails.getProgress());

        return shipmentRepository.save(shipment);
    }

    // DELETE shipment
    @DeleteMapping("/{reference}")
    public String deleteShipment(@PathVariable String reference) {

        Shipment shipment = shipmentRepository.findByReference(reference)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Shipment not found: " + reference));

        shipmentRepository.delete(shipment);

        return "Shipment " + reference + " deleted successfully";
    }
}