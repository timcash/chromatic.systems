/* main.c
 * a simple C program
 */

#include <stdio.h>
#define LAST 10

// a struct to represent a a 4x4 matrix
struct matrix
{
    int m[4][4];
};

// create an example matrix
struct matrix create_matrix()
{
    struct matrix m;
    int i, j;

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            m.m[i][j] = i * j;
        } /*-for-*/
    } /*-for-*/

    return m;
}

// print the matrix
void print_matrix(struct matrix m)
{
    int i, j;

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            printf("%d ", m.m[i][j]);
        } /*-for-*/
        printf("\n");
    } /*-for-*/
}

// multiply two 4x4 matrices
struct matrix multiply_matrices(struct matrix m1, struct matrix m2)
{
    struct matrix m;
    int i, j, k;

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 4; j++)
        {
            m.m[i][j] = 0;
            for (k = 0; k < 4; k++)
            {
                m.m[i][j] += m1.m[i][k] * m2.m[k][j];
            } /*-for-*/
        } /*-for-*/
    } /*-for-*/

    return m;
}

// create 2 example matrices and multiply them and print the result
int main()
{
    struct matrix m1 = create_matrix();
    struct matrix m2 = create_matrix();
    struct matrix m3 = multiply_matrices(m1, m2);

    print_matrix(m1);
    print_matrix(m2);
    print_matrix(m3);

    return 0;
}