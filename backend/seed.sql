-- Run this once against your umbrella_logistics database to populate
-- demo shipments matching the "Demo references" buttons on the
-- Tracking section of the website.
--
--   psql -U postgres -d umbrella_logistics -f seed.sql

INSERT INTO shipments (reference, origin, destination, cargo, status, status_description, progress, updated_at)
VALUES
  ('UMB-2026-00124', 'Johannesburg, South Africa', 'Maputo, Mozambique', 'Commercial Goods', 'In Transit', 'Your shipment is currently in transit toward its destination.', 55, now()),
  ('UMB-2026-00125', 'Pretoria, South Africa', 'Gaborone, Botswana', 'General Freight', 'Customs Processing', 'Shipment documentation is currently being processed.', 75, now()),
  ('UMB-2026-00126', 'Johannesburg, South Africa', 'Harare, Zimbabwe', 'Commercial Cargo', 'Delivered', 'Shipment has reached its destination.', 100, now())
ON CONFLICT (reference) DO NOTHING;
