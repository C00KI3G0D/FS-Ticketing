package crm.local.pap.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crm.local.pap.dtos.CreateRoleDTO;
import crm.local.pap.dtos.MessageResponse;
import crm.local.pap.models.Role;
import crm.local.pap.services.RoleService;

@RestController
@RequestMapping("api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;
    
    @GetMapping({ "", "/" })
    public ResponseEntity<List<Role>> listRoles() {
        return new ResponseEntity<List<Role>>(this.roleService.listRoles(), HttpStatus.OK);
    }

    @PostMapping({ "", "/" })
    public ResponseEntity<MessageResponse> createRole(@RequestBody CreateRoleDTO request) {
        this.roleService.createRole(request);
        return new ResponseEntity<MessageResponse>(new MessageResponse("Role "+ request.getName() + " created successfully!"), HttpStatus.CREATED);
    }

}
