
# Proje 1

[22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
    ### _Çözüm_
    1. Adım [22, 27, 16, 2, 18, 6]
    2. Adım [`2`, 22, 27, 16, 18, 6]
    3. Adım [`2`, `6`, 22, 27, 16, 18]
    4. Adım [`2`, `6`, `16` 22, 27, 18]
    5. Adım [`2`, `6`, `16`, `18` 22, 27]
---
2. Big-O gösterimini yazınız.

    ### _Çözüm_
    n.(n+1)/2

    = n^2

    => o(n^2)
---
3. Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

    * Average case: Aradığımız sayının ortada olması
    * Worst case: Aradığımız sayının sonda olması
    * Best case: Aradığımız sayının dizinin en başında olması.

    ### _Çözüm_
    **Time Complexity**: sıralama bu şekilde [6,2,16,18,22,27] olacağı için 6 = Lower , 27 = Higher ve 18 = Middle olacaktır. Bu durumda 18 sayısı Average Case için uygun oluyor.
---

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

### Çözüm
1. Adım [7, 3, 5, 8, **2**, 9, 4, 15, 6]
2. Adım [`2`, **3**, 5, 8, 7, 9, 4, 15, 6]
3. Adım [`2`, `3`, **5**, 8, 7, 9, **4**, 15, 6]
4. Adım [`2`, `3`, `4`, **8**, 7, 9, **5**, 15, 6]
5. Adım [`2`, `3`, `4`, `5`, **7**, 9, 8, 15, **6**]
6. Adım [`2`, `3`, `4`, `5`, `6`, **9**, 8, 15, **7**]
7. Adım [`2`, `3`, `4`, `5`, `6`, `7`, 8, 15, 9]
8. Adım [`2`, `3`, `4`, `5`, `6`, `7`, **8**, 15, 9]
9. Adım [`2`, `3`, `4`, `5`, `6`, `7`, `8`, **15**, **9**]
10. Adım [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, **15**]
11. Adım [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `15`]