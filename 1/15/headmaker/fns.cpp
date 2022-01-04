#include <string>
#include "fns.hpp"

std::string value = "";

std::string draw_hair(int size, std::string hair) {
  value = "┌";
  std::string head = "";
  if (hair == "y") {
    head = "┴";
  } else {
    head = "─";
  }
  for (int i = 0; i < size; i++) {
    value += head;
  }
  value += "┐\n";
  return value;
}

std::string draw_glasses(int size, std::string glasses) {
  std::string middle = "";
  if (glasses == "y") {
    value = "├▢";
    middle = "─";
  } else {
    value = "│.";
    middle = " ";
  }
  for (int i = 0; i < size-2; i++) {
    value += middle;
  }
  if (glasses == "y") {
    value += "▢┤\n";
  } else {
    value += ".│\n";
  }
  return value;
}

std::string draw_nose(int size) {
  value = "│";
  for (int i = 0; i < size-1; i++) {
    value += " ";
    if ((size-1)/2 == i) {
      value += "┘";
    }
  }
  value += "│\n";
  return value;
}

std::string draw_mouth(int size) {
  value = "╲";
  for (int i = 0; i < size-2; i++) {
    value += " ";
    if ((size-3)/2 == i) {
      value += "◡";
    }
  }
  value += "╱\n";
  return value;
}

std::string draw_jaw(int size) {
  value = " └";
  for (int i = 0; i < size-2; i++) {
    value += "─";
  }
  value += "┘\n";
  return value;
}

/*
┌┴┴┴┴┴┴┴┴┴┴┐
├O────────O┤
│     ┘    │
╲    _    ╱
 └────────┘
*/
