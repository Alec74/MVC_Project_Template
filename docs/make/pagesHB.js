const fs = require('fs');

const makePage1 = () => 
`<div class="container">
<div class="row">
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">This is page 1</li>
        <li class="list-group-item">Its a cool page</li>
        <li class="list-group-item">The best page around</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content</li>
        <li class="list-group-item">Example content 2</li>
        <li class="list-group-item">Example content 3</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content 4</li>
        <li class="list-group-item">Example content 5</li>
        <li class="list-group-item">Example content 6</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
</div>
</div>
`;

const makePage2 = () => 
`<div class="container">
<div class="row">
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">This is page 2</li>
        <li class="list-group-item">Its a cooler page</li>
        <li class="list-group-item">The next best page around</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content 7</li>
        <li class="list-group-item">Example content 8</li>
        <li class="list-group-item">Example content 9</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content 10</li>
        <li class="list-group-item">Example content 11</li>
        <li class="list-group-item">Example content 12</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
</div>
</div>
`;

const makePage3 = () => 
`<div class="container">
<div class="row">
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">This is page 3</li>
        <li class="list-group-item">Its an okay page</li>
        <li class="list-group-item"><button class="btn" id="logout">logout</button></li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content 13</li>
        <li class="list-group-item">Example content 14</li>
        <li class="list-group-item">Example content 15</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Example content 16</li>
        <li class="list-group-item">Example content 17</li>
        <li class="list-group-item">Example content 18</li>
      </ul>
      <div class="card-footer">
        Card footer
      </div>
    </div>
  </div>
</div>
</div>
`;

const makeHomepage = () => 
`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/page1">Page 1</a>
            <a class="nav-link" href="/page2">Page 2</a>
            {{#if logged_in}}
            <a class="nav-link" href="/page3">Page 3</a>
            {{/if}}
        </div>
    </div>
</div>
</nav>
`;

const makeLogin = () => 
`<form class="form login-form">
<div class="form-group">
  <label for="email-login">Email address</label>
  <input type="email" class="form-control form-input" id="email-login" aria-describedby="emailHelp"
    placeholder="Enter email">
</div>
<div class="form-group">
  <label for="password-login">Password</label>
  <input type="password" class="form-control form-input" id="password-login" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary" >Login</button>
</form>
`;

const dotEnv = () => 
`DB_NAME=
DB_USER=
DB_PASSWORD=
`;

module.exports = {makePage1, makePage2, makePage3, makeHomepage, dotEnv, makeLogin};