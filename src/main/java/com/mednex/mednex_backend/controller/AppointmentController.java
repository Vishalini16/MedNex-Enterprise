package com.mednex.backend.controller;

import com.mednex.backend.model.Appointment;
import com.mednex.backend.repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentRepository repo;

    public AppointmentController(AppointmentRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Appointment save(@RequestBody Appointment appointment) {
        return repo.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAll() {
        return repo.findAll();
    }
}
