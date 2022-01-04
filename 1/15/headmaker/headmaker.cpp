#include <iostream>

#include "fns.hpp"

int main() {

  std::string glasses, hair;
  int size;
 
  while (size > 16 || size < 6) { 
    std::cout << "Size of the head? (6-16) : ";
    std::cin >> size;
  }

  while (!(hair == "y" || hair == "n")) {
    std::cout << "Spiky hair? (y/n) : ";
    std::cin >> hair;
  }  

  while(!(glasses == "y" || glasses == "n")) {
    std::cout << "Glasses? (y/n) : ";
    std::cin >> glasses;
  }  

  std::cout << "\n";
  std::cout << draw_hair(size, hair);
  std::cout << draw_glasses(size, glasses);
  std::cout << draw_nose(size);
  std::cout << draw_mouth(size);
  std::cout << draw_jaw(size);
  std::cout << "\n";

  return 0;
    
}
