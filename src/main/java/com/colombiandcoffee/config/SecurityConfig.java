package com.colombiandcoffee.config;

//import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers( "/", "/static/**", "/api/login", "/api/me", "/api/register").permitAll()
                // Otras configuraciones de autorización aquí
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/index") // Puedes personalizar la página de inicio de sesión si es necesario
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }
}
