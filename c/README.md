# To compile with zig

```
zig cc -o example buffer.c main.c
```

# Using zig build-exe and others

The other way to build a C project with the Zig toolchain is the same way as building a Zig project:

```
zig build-exe -lc main.c buffer.c
```
