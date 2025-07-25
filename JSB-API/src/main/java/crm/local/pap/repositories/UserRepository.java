package crm.local.pap.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import crm.local.pap.models.User;

public interface UserRepository extends JpaRepository <User, UUID> {
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
    Optional<User> findByFirstNameAndLastName(String firstName, String lastName);
}
