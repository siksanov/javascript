function factorial(val) {
    if (val == 1)
        return 1;
    else
        return val * factorial(val - 1);
}
