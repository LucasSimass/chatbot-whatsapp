import type User from "./user.ts";

class Users {
  users: User[] = []
  
  addUser(user: User) {
    console.log(user.lid);
    
    this.users.push(user)    
    return user;
  }

  findUserByLid(userId: string | undefined): User | undefined {
    return this.users.find(user => user.lid == userId);
  }

  findUserByLidNumber(userLidNumber: string | undefined): User | undefined {
    return this.users.find(user => user.lidNumber == userLidNumber);
  }

  findUsersByLidNumber(usersLids: string[] | undefined): User[] | undefined {
    if (!usersLids){ return []; }

    let usersWithSameLids: User[] = [];
    usersLids.forEach(lid => {
      const userFound: User | undefined = this.findUserByLidNumber(lid);
     
      if (userFound){
        usersWithSameLids.push(userFound)
      }
    })
    return usersWithSameLids.length > 0 ? usersWithSameLids : undefined
  }

  findUserByJid(userId: string | undefined): User | undefined {
    return this.users.find(user => user.jid == userId);
  }

  findUserByName(userName: string | undefined): User | undefined {
    return this.users.find(user => user.name == userName);
  }
  findUserByNumber(userNumber: string | undefined): User | undefined {
    return this.users.find(user => user.number == userNumber);
  }
}

export default Users