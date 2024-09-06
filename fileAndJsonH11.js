const fs = require("fs");
const readline = require("readline");

// Tạo giao diện để nhận đầu vào từ người dùng
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Đọc dữ liệu người dùng từ file user.json
function readUsersFromFile() {
  try {
    const data = fs.readFileSync("user.json", "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
}

// Ghi dữ liệu người dùng vào file user.json
function writeUsersToFile(users) {
  fs.writeFileSync("user.json", JSON.stringify(users, null, 2), "utf8");
}

// Tạo người dùng mới
function createUser() {
  const users = readUsersFromFile();

  rl.question("Enter name: ", (name) => {
    rl.question("Enter role: ", (role) => {
      rl.question("Enter gender (male/female): ", (gender) => {
        rl.question("Enter nationality: ", (nationality) => {
          const userData = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name,
            role,
            gender,
            nationality,
          };
          users.push(userData);
          writeUsersToFile(users);
          console.log("User created successfully:", userData);
          mainMenu(); // Quay lại menu chính
        });
      });
    });
  });
}

// Cập nhật thông tin người dùng
function updateUser() {
  const users = readUsersFromFile();

  rl.question("Enter user ID to update: ", (id) => {
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex !== -1) {
      rl.question(
        "Enter new name (or press Enter to keep the current name): ",
        (name) => {
          rl.question(
            "Enter new role (or press Enter to keep the current role): ",
            (role) => {
              rl.question(
                "Enter new gender (male/female or press Enter to keep the current gender): ",
                (gender) => {
                  rl.question(
                    "Enter new nationality (or press Enter to keep the current nationality): ",
                    (nationality) => {
                      const userData = {
                        name: name || users[userIndex].name,
                        role: role || users[userIndex].role,
                        gender: gender || users[userIndex].gender,
                        nationality:
                          nationality || users[userIndex].nationality,
                      };
                      users[userIndex] = { ...users[userIndex], ...userData };
                      writeUsersToFile(users);
                      console.log(
                        "User updated successfully:",
                        users[userIndex]
                      );
                      mainMenu(); // Quay lại menu chính
                    }
                  );
                }
              );
            }
          );
        }
      );
    } else {
      console.log("User not found!");
      mainMenu(); // Quay lại menu chính
    }
  });
}

// Xóa người dùng
function deleteUser() {
  const users = readUsersFromFile();

  rl.question("Enter user ID to delete: ", (id) => {
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      writeUsersToFile(users);
      console.log("User deleted successfully.");
    } else {
      console.log("User not found!");
    }
    mainMenu(); // Quay lại menu chính
  });
}

// Hiển thị danh sách người dùng có phân trang
function getUsers(pageIndex, pageSize) {
  const users = readUsersFromFile();
  const totalDocs = users.length;
  const totalPage = Math.ceil(totalDocs / pageSize);

  const startIndex = (pageIndex - 1) * pageSize;
  const paginatedUsers = users.slice(startIndex, startIndex + pageSize);

  return {
    users: paginatedUsers,
    totalPage,
    totalDocs,
  };
}

function displayUsers() {
  rl.question("Enter page index: ", (pageIndex) => {
    rl.question("Enter page size: ", (pageSize) => {
      const result = getUsers(parseInt(pageIndex), parseInt(pageSize));
      console.log("Paginated Users:", result);
      mainMenu(); // Quay lại menu chính
    });
  });
}

// Menu chính cho phép người dùng chọn hành động
function mainMenu() {
  console.log("--- User Management Menu ---");
  console.log("1. Create User");
  console.log("2. Update User");
  console.log("3. Delete User");
  console.log("4. Display Users");
  console.log("5. Exit");

  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        createUser();
        break;
      case "2":
        updateUser();
        break;
      case "3":
        deleteUser();
        break;
      case "4":
        displayUsers();
        break;
      case "5":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        mainMenu();
        break;
    }
  });
}

// Bắt đầu chương trình với menu chính
mainMenu();
