package crm.local.pap.dtos;

import crm.local.pap.models.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserDTO {
    public String firstName;
    public String lastName;
    public String email;
    public String number;
    public String password;
    public Role role;
}
