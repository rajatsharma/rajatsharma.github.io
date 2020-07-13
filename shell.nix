with import <nixpkgs> { };

stdenv.mkDerivation {
  name = "rajatsharam.github.io";

  buildInputs = [ nixfmt nodejs yarn ];
}
