package za.co.umbrella.umbrella_logistics_api.repository;

import za.co.umbrella.umbrella_logistics_api.entity.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

    Optional<Shipment> findByReference(String reference);
}