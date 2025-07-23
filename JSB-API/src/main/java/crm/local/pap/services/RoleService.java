package crm.local.pap.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crm.local.pap.dtos.CreateRoleDTO;
import crm.local.pap.models.Role;
import crm.local.pap.repositories.RoleRepository;

@Service
public class RoleService {
    
    @Autowired
    private RoleRepository roleRepository;

    public List<Role> listRoles() {
        return this.roleRepository.findAll();
    }

    public void createRole(CreateRoleDTO roleDTO) {
        Role role = new Role();
        role.setName(roleDTO.getName());
        roleRepository.save(role); 
    }
}
