# lambdaを学ぶ前に  


lambdaを学ぶ前に、必ず理解しておかなければならない項目が幾つかあります。  
- クラス  
- インスタンス  
- オブジェクト  
- メソッド  

これらの項目を理解していないと、lambdaを完全には理解できません。  
まず、lambdaを説明する前に上記の項目を解説していきます。  
最後に、lambdaはProc、block(ブロック)という２つの項目と絡めながら説明をしていきます。  

<br />  

## クラスとインスタンス  
インスタンスはクラスを元に作成されるものです。ここでは下記のように考えます。  
<br />  
クラス = 設計図  
インスタンス  = 設計図（クラス）を元に作成されたもの  

（クラス、インスタンスの図）  
[![https://gyazo.com/645bc77e45ad6410be7bef7330dfc710](https://i.gyazo.com/645bc77e45ad6410be7bef7330dfc710.png)](https://gyazo.com/645bc77e45ad6410be7bef7330dfc710)

<br />  

クラスを元にインスタンスを作成するときは、```.new()```メソッドを使用します。  
クラスとインスタンスはどちらも **オブジェクト** です。  

<br />  

オブジェクトとして考えるもの  
- クラス  
- インスタンス  
- module  

上記の３つです。つまり、上記以外はオブジェクトではないとも言えますね。  
それでは上記にあった、**module** とはなんでしょうか？  
moduleとはクラスとほとんど同じものですが、クラスのようにオブジェクトを作成することのできないものです。  

<br />  

- **クラス変数**  
クラス変数とは、クラスを元に作成されたすべてのインスタンスで使用することのできる変数です。  

(クラス変数の図)  
[![https://gyazo.com/6f67aeb76011510401f48d10376af720](https://i.gyazo.com/6f67aeb76011510401f48d10376af720.png)](https://gyazo.com/6f67aeb76011510401f48d10376af720)  

<br />  


クラス変数の記述法：  
**@@class_hoge = 'class_hoge'**  
<br />  
-  **インスタンス変数**  
クラス変数に対しインスタンス変数とは、クラスを元に作成されたそれぞれのインスタンスが固有で持つ変数です。クラス変数とは違い、複数のインスタンスそれぞれが違った固有のインスタンス変数及び処理（機能）を持っている状態です。  

（インスタンス変数の図）  
[![https://gyazo.com/5549502b4e6f1bc278a6c806f0bf50ec](https://i.gyazo.com/5549502b4e6f1bc278a6c806f0bf50ec.png)](https://gyazo.com/5549502b4e6f1bc278a6c806f0bf50ec)  
<br />  
インスタンス変数の記述法：  
**@instance_hoge = 'instance_hoge'**  
<br />  
＊この変数にアクセスできるのは、initializeメソッドとオブジェクトであるインスタンスメソッドのみです。  

クラスとインスタンスそれぞれの記述法を見ると、**@の数が違う** ことがわかると思います。  
<br />  
- **クラスメソッド**  
クラス自身が使用できるメソッドです。このメソッドはクラス自身をレシーバとして働きます。  
<br />  
クラスメソッドの記述法：  

```  
class Hoge  
      def self.hoge  
        "hoge"  
      end  
end  
```  

<br />  
＊先ほどのクラスメソッドと比べ、**self.** が必要ないことに気づくかと思います。  
インスタンスメソッドの呼び出し方法はクラスメソッドと大きく異なります。上記インスタンスメソッドの記述法のように、メソッドと別に変数指定をしてあげないと、インスタンスメソッドは呼び出せないので注意しましょう。  
<br />  
<br />  

**ここまでがlambdaを学ぶ為の下地です。**  

<br />  

　**ここからは、Proc,block（ブロック）と共に、lambdaがどういった働きをするのかを学んでいきましょう。**  

<br />  

まずは、block（ブロック）の説明から始めます。  

<br />  

- **block（ブロック）**  
簡単に説明をすると、blockは ```do ~ end ``` で囲われている範囲を引数にします。blockで引数にした部分は、メソッド内で ```yield``` を使用することにより、引数として呼び出すことができます。  

<br />  

記述例：  
```  
this_is_block do  
    puts "This is block!"  
end
```  
<br />  

＊下記はblockを受け取る引数の定義です。  

<br />  

```  
def this_is_block  
    yield  
end  
```  

<br />  

上記は ```def``` の後に ```this_is_block``` と記述してから、```yield``` を使用することで、どのblockを呼び出すかを指定しています。これは、ブロックが複数ある場合に ```yield``` でどのblockを呼びだすか判別するためです。  

<br />  

ブロックの理解ができたら、次はProcです。これはlambdaととても似ているものなので、違いをしっかりと理解して使い分ける必要があります。  

<br />  

- **Proc**  
Procとは、先ほど説明したblockをインスタンスとしたものです。これはlambdaでも同じです。  

<br />  

Procとblockの大きな違いはそれぞれの単語の頭文字を見ることでわかります。  
クラスの頭文字は大文字です。このことから **Procはクラスである** ことが推測できます。  
同様に、lambdaとblockは頭文字が小文字ですね。これは両者ともクラスではないからです。  

<br />  

それではProcの働きです。上記のようにProcはblockをインスタンス化して、結果的にオブジェクトとなったものです。プログラミングを書き進めていくと、前回使用したblockをもう一度別の場所で使用したい状況が出てくると思います。作業工程が似通っていたり、被っている時などを思い浮かべてください。こんなときは、さっきと全く同じblockを作成してまた```yield```して...というのは少し冗長に成ってしまいます。  
そういった状況で力を発揮するのがProcです。  
Procはblockを保存できるのです。つまり、必要な場面で以前のblockを呼び出して再利用できるのです。これはblockが構文の一部でしかないのに対して、Procはそれをインスタンス化してオブジェクトとして扱うからです。  
blockと違い、Procでblockを呼び出すときは```yield```ではなく```proc.call```を使用します。  

<br />  

Procの記述法：  

<br />  

```  
proc_test =Proc.new do  
    puts "hoge"  
end  
```  

<br />  

```  
proc_test.call で実行

=> "hoge"  
```  

<br />  

＊callされる時に、**引数が渡されることを前提としているProcの記述法も存在します。**  

<br />  

```  
proc_test2 = Proc.new do |name|  
    puts "Hello, #{name}!"  
end  
proc_test.call(kazuki)   で実行すると  
=>"Hello, kazuki!"  
```  

<br />  

この記述法では **仮引数をname** として、実行する際に **実引数としてカッコの中にkazuki** を渡してあげているのがわかりますね。  

<br />  

**Procの次はlambdaですね。**  

<br />  

- **lambda**  
lambdaは、基本の働きは上記のProcと同じです。  

<br />  

lambdaの記述法：  

<br />  

```  
lambda_test = lambda do |name|  
  puts "Hello, #{name}!"  
end   

lambda_tet.call()  で実行してみます。  
=> ArgumentError: wrong number of arguments (0 for 1)  
```  

<br />  

なぜこのようなエラーメッセージが出てしまうのでしょうか？  

<br />  

lambdaを定義した所を見てみましょう。**仮引数を１つ** 記述しているのに対して、実行した際には **実引数を一つも** 記述していませんね。  
仮引数と実引数の数があっていないのでlambdaはエラーメッセージを出しているのです。  

**ここがProcとlambdaの違いです。**    
<br />  
試しにProcで同じことをしてみましょう。  

<br />  

```  
proc_test = Proc.new do |name|  
  puts "Hello, #{name}!"  
end   

proc_test.call()   で実行します。  
=> Hello,  
```  

<br />  

このように、Procでは仮引数で指定されていない実引数で実行してもエラーにはならず、ブランクとして表示されます。  
Procとlambdaの大きな違いは、**仮引数と実引数の厳しいチェックがあるかないか**、ということがわかりますね。  

少し駆け足にはなってしまいましたが、以上がlambdaの働きと定義の仕方です。  
<br />  
